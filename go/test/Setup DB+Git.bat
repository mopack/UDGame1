go get github.com/lib/pq

cd C:\Program Files\PostgreSQL\pg11\bin
createuser.exe --createdb --username postgres --no-createrole --pwprompt mopack.chiou
createdb MyLine
cd C:\Users\mopack.chiou\Desktop\Code\GoWeb\chitchat\data
psql -f setup.sql -d MyLine

