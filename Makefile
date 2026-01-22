.PHONY: audit build clean install reinstall start outdated update

.DEFAULT_GOAL := build

audit:
	@pnpm audit

build:
	@pnpm run build

clean:
	@rm -f pnpm-lock.yaml
	@rm -rf node_modules

install:
	@pnpm install

reinstall: clean install

start:
	@pnpm run start

outdated:
	@pnpm outdated

update:
	@prek auto-update
	@pnpm update
