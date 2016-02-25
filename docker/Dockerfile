FROM ubuntu:14.04

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y software-properties-common && \
  add-apt-repository -y ppa:ubuntu-toolchain-r/test

RUN apt-get update && \
  apt-get install -y nano git curl nodejs npm \
  libstdc++-4.9-dev

RUN npm install -g n

RUN n 5.7.0 && ln -fs `n bin 5.7.0` /usr/bin/node

# Install nodegit
RUN git clone https://github.com/nodegit/nodegit && \
  cd nodegit && \
  git checkout v0.11.4

# Some hacking to get nodegit to install
# See: https://github.com/nodegit/nodegit/issues/650
RUN cd /nodegit && \
  npm install && \
  cd vendor/libssh2 && \
  ./configure && \
  cd ../.. && \
  npm run rebuild && \
  npm link

# install nodegit-kit
RUN git clone https://github.com/yofreke/nodegit-kit

RUN cd /nodegit-kit && \
  npm link nodegit && \
  npm install
