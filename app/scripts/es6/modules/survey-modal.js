import { config } from '../helpers/config';

export default () => {

  const $clickableSection = $('.survey-modal-trigger');

  if ($clickableSection.length > 0) {
    const $modal = $('#modal-survey');
    const $closeButton = $modal.find('.close');
    const $formSurvey = $modal.find('#form-survey');
    const $formSurveySection1 = $modal.find('.form-survey__section-1');
    const $formSurveySection2 = $modal.find('.form-survey__section-2');
    const $modalSurveyNext = $modal.find('.modal-survey__next');
    const $modalSurveySubmit = $modal.find('.modal-survey__submit');
    const $modalSurveyCheckbox = $modal.find('.modal-survey__option-checkbox');
    const $modalSurveyCheckboxTopic = $modal.find('.modal-survey__option-checkbox.topic-check');
    const $modalSurveyCheckboxTool = $modal.find('.modal-survey__option-checkbox.tool-check');
    let api;
    const apiDev = config.apiDev;
    const apiStage = config.apiStage;
    const apiProd = config.apiProd;
    const devEnv = config.devEnv;

    $modalSurveyCheckboxTopic.on('click', function() {
      if ($modalSurveyCheckboxTopic.is(':checked')) {
        $modalSurveyNext.removeClass('disabled');
      } else {
        $modalSurveyNext.addClass('disabled');
      }
    });

    $modalSurveyCheckboxTool.on('click', function() {
      if ($modalSurveyCheckboxTool.is(':checked')) {
        $modalSurveySubmit.removeClass('disabled');
      } else {
        $modalSurveySubmit.addClass('disabled');
      }
    });

    $clickableSection.on('click', function(e) {
      e.preventDefault();
      $modal.modal('show');
    });

    $closeButton.on('click', function(e) {
      e.preventDefault();
      $modal.modal('hide');
    });

    $modal.on('hidden.bs.modal', function() {
      $formSurveySection1.show();
      $formSurveySection2.hide();
      $modalSurveyNext.addClass('disabled');
      $modalSurveySubmit.addClass('disabled');
      $formSurvey[0].reset();
    });

    $modalSurveyNext.on('click', function(e) {
      e.preventDefault();
      $formSurveySection1.hide();
      $formSurveySection2.show();
      $modal.animate({
        scrollTop: 0
      }, 500, 'swing');
    });

    let topicValues;
    let toolValues;

    $($modalSurveyCheckbox).on('change', function(e) {
      e.preventDefault();
      topicValues = new Array();
      toolValues = new Array();
      $('.modal-survey__option-checkbox.topic-check:checked').each(function() {
        topicValues.push($(this).val());
      });

      $('.modal-survey__option-checkbox.tool-check:checked').each(function() {
        toolValues.push($(this).val());
      });
    });


    $modalSurveySubmit.on('click', function(e) {
      e.preventDefault();

      if(window.location.host === 'www.whatishelpdelta.com' || window.location.host === 'whatishelpdelta.com ') {
        api = apiProd;
      } else if(window.location.host === devEnv) {
        api = apiDev;
      } else {
        api = apiStage;
      }

      $.post(api, { topics: topicValues.join(' | '), tools: toolValues.join(' | ') })
      .done(function() {
        window.location.href = '/thank-you/';
      })
      .fail(function() {
        window.location.href = '/404/';
      });
    });
  }
};
