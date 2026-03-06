include .env

build:
	python3 build.py

dev:
	SHOW_DRAFTS=true python3 build.py

deploy: build
	rsync -rlDzv --no-owner --no-group --no-times --chmod=D775,F664 out/ $(DEPLOY_USER)@$(DEPLOY_HOST):$(DEPLOY_PATH)
