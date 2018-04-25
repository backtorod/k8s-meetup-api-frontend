FROM node:8.11

ENV work_dir=/app
ENV src_dir=src/reactjs/frontend
ENV PATH=$PATH:/node_modules/.bin

RUN mkdir $work_dir
ADD $src_dir/ $work_dir/
ADD bin/start $work_dir/start
WORKDIR $work_dir

RUN npm install

EXPOSE 3000

ENTRYPOINT ["./start"]
