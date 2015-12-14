export class FlameResponse{
  constructor(req,res){
    this.req=req;
    this.res=res;
  }

  send(msg){
    if(msg)
    this.res.end(msg);
    else
    this.res.end(msg);
  }

  status(number){
    this.res.statusCode = number;
  }

  setHeader(key,value){
    this.res.setHeader(key,value);
  }

  removeHeader(key){
    this.res.removeHeader(key);
  }
}

export class HTMLResponse extends flame-response{
  constructor(req,res){
    super(req,res);
    this.setHeader("content-type","text/html");
  }

  send(msg){
    if(msg)
    super.send(msg);
    else
    super.send();
  }
}


export class JsonResponse extends flame-response{
  constructor(req,res){
    super(req,res);
    this.setHeader("content-type","application/json");
  }

  send(msg){
    if(msg)
    super.send(JSON.stringify(msg))
    else
    super.send();
  }
}


export class FileResponse extends flame-response{
  constructor(req,res){
    super(req,res);
    this.setHeader("content-type","application/octet-stream");
  }

  send(filename){
    let lookup = require("mime-loopup");
    let mimedb = require("mime-db");
    lookup = new lookup(mimedb);
    let val = lookup.lookup(filename);
    if(val){
      this.setHeader("content-type",val);
    }
    let fs = require("fs");
    let stream = fs.createReadStream(filename);
    res.pipe(stream);
  }
}
