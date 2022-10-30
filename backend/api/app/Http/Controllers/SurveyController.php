<?php

namespace App\Http\Controllers;

use App\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function create(Request $request)
    {
        $survey = Survey::create($request->all());

        return response()->json($survey, 200);
    }
    public function showAll()
    {
        return response()->json(Survey::all(), 200);
    }
}