#!/bin/bash


echo "////// WelCome To FriDay AutoMates //////"

function stopwatch() {
    local BEGIN=$(date +%s)
    echo Starting Stopwatch...

    while true; do
        local NOW=$(date +%s)
        local DIFF=$(($NOW - $BEGIN))
        local MINS=$(($DIFF / 60))
        local SECS=$(($DIFF % 60))
        local HOURS=$(($DIFF / 3600))
        local DAYS=$(($DIFF / 86400))

        printf "\r%3d Days, %02d:%02d:%02d" $DAYS $HOURS $MINS $SECS
        sleep 0.5
    done
}


npm run fy &&
git pull g main

sleep 1m
npm run fy
git pull g main


