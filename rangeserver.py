import os, http.server, socketserver
os.chdir('/Users/match/syncbuddy-team-pages')
class RangeH(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        path=self.translate_path(self.path)
        if os.path.isdir(path): return super().send_head()
        rng=self.headers.get('Range')
        try: f=open(path,'rb')
        except OSError: self.send_error(404); return None
        size=os.fstat(f.fileno()).st_size; ctype=self.guess_type(path)
        if rng and rng.startswith('bytes='):
            try:
                s,e=rng[6:].split('-'); start=int(s); end=int(e) if e else size-1
            except: start,end=0,size-1
            end=min(end,size-1); length=end-start+1
            self.send_response(206); self.send_header('Content-Type',ctype)
            self.send_header('Accept-Ranges','bytes'); self.send_header('Content-Range',f'bytes {start}-{end}/{size}')
            self.send_header('Content-Length',str(length)); self.end_headers()
            f.seek(start); self.wfile.write(f.read(length)); f.close(); return None
        self.send_response(200); self.send_header('Content-Type',ctype)
        self.send_header('Accept-Ranges','bytes'); self.send_header('Content-Length',str(size)); self.end_headers()
        return f
    def log_message(self,*a): pass
class Server(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads=True
Server(('127.0.0.1',4599), RangeH).serve_forever()
