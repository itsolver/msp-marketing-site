FROM timbru31/ruby-node:2.7-fermium
ENV NOKOGIRI_USE_SYSTEM_LIBRARIES=true
COPY . ./
RUN npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
RUN npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
RUN npm install sharp
RUN npm install -g gulp-cli
RUN npm install
RUN gem install bundler:2.3.10
RUN bundle _2.3.10_ install
WORKDIR /workspace
VOLUME /workspace
ENTRYPOINT [ "gulp" ]
EXPOSE 4000
