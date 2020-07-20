install: install-deps

types: check-types

run: start

start:
	npm run dev

check-types:
	npx tsc

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

lint:
	npx eslint .

build-prod:
	npm run build-prod