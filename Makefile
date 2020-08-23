build:
	./node_modules/.bin/tsc

watch:
	./node_modules/.bin/tsc --watch

run:
	node ./dist/class.js