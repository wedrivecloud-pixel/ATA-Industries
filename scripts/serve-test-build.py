"""Serve built output plus test-only original design references on loopback."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

root = Path(__file__).resolve().parent.parent
class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        if path.startswith('/___design/'):
            file = (root / '.visual-reference' / path.removeprefix('/___design/').split('?')[0]).resolve()
            if file.is_relative_to(root / '.visual-reference'):
                return str(file)
        return super().translate_path(path)
    def log_message(self, *args):
        pass

ThreadingHTTPServer(('127.0.0.1',4323), lambda *a, **k: Handler(*a,directory=str(root/'dist'),**k)).serve_forever()
