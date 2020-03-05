VERSION=$1
docker build . -t open-pr-fronend:$VERSION
docker push open-pr-fronend:$VERSION
