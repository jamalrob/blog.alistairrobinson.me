include .env

build:
	python3 build.py

dev:
	SHOW_DRAFTS=true python3 build.py

serve: dev
	cd out && python3 -m http.server 8000

watch:
	.venv-dev/bin/python dev_server.py

deploy:
	OUT_DIR=out-deploy python3 build.py
	rsync -rlDzv --no-owner --no-group --no-times --chmod=D775,F664 out-deploy/ $(DEPLOY_USER)@$(DEPLOY_HOST):$(DEPLOY_PATH)
