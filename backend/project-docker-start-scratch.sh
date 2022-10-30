#!/bin/bash
cd "$(dirname "$0")"
source ./.env

containers=( "reverse_proxy" "database" "pma" "php" "nginx")
backups=( ${BACKUP_SOURCEFILE_COM} )
hosts=( ${PMA_BASE_URL} ${PROXY_BASE_URL} ${PROJECT_BASE_URL} ${GULP_BASE_URL} )

export COMPOSE_PROJECT_NAME=${COMPOSE_PROJECT_NAME}
export GREEN='\033[0;32m'
export RED='\033[0;31m'
export NC='\033[0m' # No Color
export YELLOW_BG='\033[33;7m'

echo "${GREEN} *************** Setting Up Docker *************** ${NC}"
for container in "${containers[@]}"
do
    docker stop ${COMPOSE_PROJECT_NAME}_${container}
    docker rm ${COMPOSE_PROJECT_NAME}_${container}
done
docker volume rm ${COMPOSE_PROJECT_NAME}_db_data
docker-compose -f docker-compose.yml down

for container in "${containers[@]}"
do
    docker-compose up -d ${container}
    sleep 5
done

echo "${GREEN} *************** Setting Up Docker *************** ${NC}"
echo "${RED}(1/3)-> Docker set up completed. ${NC}"

echo "${GREEN} *************** Setting Up API *************** ${NC}"
docker exec  --interactive ${COMPOSE_PROJECT_NAME}_php composer install
docker exec  --interactive ${COMPOSE_PROJECT_NAME}_php php artisan migrate

echo "${GREEN} *************** Setting Up API *************** ${NC}"
echo "${RED} (2/3)-> API set up completed. ${NC}"

echo "${GREEN} *************** Setting Up Hosts *************** ${NC}"
for host in "${hosts[@]}"
do
    echo "Adding host locally... ${host}"
    hostline=$(echo 127.0.0.1 $host \#$(echo -ne $host | base64))
    sed -i -e "/${hostline}/d" /etc/hosts
    echo "$hostline" >> /etc/hosts
done
echo "${GREEN} *************** Setting Up Hosts *************** ${NC}"
echo "${RED}(3/3)-> Hosts set up completed.${NC}"

echo  -e "${YELLOW_BG} ♪┏(・o･)┛♪┗ ( ･o･) ┓♪ ${NC}"
echo  -e "${YELLOW_BG} -----[SUCCESS!]-----  ${NC}"
echo  -e "${YELLOW_BG} ♪┗( ･o･)┓♪┏ (・o･) ┛♪ ${NC}"