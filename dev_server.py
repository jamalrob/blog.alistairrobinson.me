"""Local dev server: rebuilds the site and live-reloads the browser on change.

Run via `make watch`. Requires the dev-only virtualenv in .venv-dev
(see Makefile) — not part of the production build (requirements.txt).
"""
import os
from livereload import Server, shell

os.environ.setdefault('SHOW_DRAFTS', 'true')

build = shell('python3 build.py')
build()  # build once up front so `out/` exists before serving

server = Server()
server.watch('content/**/*.md', build)
server.watch('content-pages/**/*.md', build)
server.watch('templates/**/*.html', build)
server.watch('static/**/*', build)
server.watch('build.py', build)
server.serve(root='out', port=8000, host='localhost')
