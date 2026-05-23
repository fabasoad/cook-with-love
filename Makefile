.PHONY: audit build clean install reinstall start outdated update

.DEFAULT_GOAL := build

audit:
	@pnpm audit --fix update

build:
	@pnpm run build

clean:
	@pnpm clean --lockfile

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
