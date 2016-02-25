#!/bin/bash

# Execute as `./run-container dev` to mount the nodegit-kit directory in to the container

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
NODEGIT_KIT_DIR=`dirname $DIR`

EXTRA_OPTS=""
if [ "$1" == "dev" ]; then
  EXTRA_OPTS="-v $NODEGIT_KIT_DIR:/nodegit-kit"
fi

docker run\
  -it \
  $EXTRA_OPTS \
  nodegit-kit:latest \
  /bin/bash
