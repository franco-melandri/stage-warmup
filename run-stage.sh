#!/bin/bash

cd /usr/tmp/stage-warmup
/home/YOOX/melandrif/.nvm/v0.10.42/bin/node nightwatch.js STAGE
/home/YOOX/melandrif/.nvm/v0.10.42/bin/node nightwatch.js INTEG_STAGE

