FROM jekyll/jekyll:latest
WORKDIR /srv/jekyll
COPY . .
EXPOSE 4000
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
