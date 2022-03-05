const inc =(A,B, sortKey) => {
  let a=A[sortKey]?A[sortKey].toLowerCase():A[sortKey];
  let b=B[sortKey]?B[sortKey].toLowerCase():B[sortKey];
  return (!a)-(!b) || +(a>b)||-(a<b);
}

const dec =(A,B, sortKey) => {
  let a=A[sortKey]?A[sortKey].toLowerCase():A[sortKey];
  let b=B[sortKey]?B[sortKey].toLowerCase():B[sortKey];
  return (!a)-(!b) || -(a>b)||+(a<b);
}

const incDate = (A,B, sortKey) => {
  let a = new Date(A[sortKey]);
  let b = new Date(B[sortKey]);
  return (!a)-(!b) || +(a>b)||-(a<b);
}

const decDate = (A,B, sortKey) => {
  let a = new Date(A[sortKey]);
  let b = new Date(B[sortKey]);
  return (!a)-(!b) || -(a>b)||+(a<b);
}

const incNum = (A,B, sortKey) => {
  let a = A[sortKey] ? parseInt(A[sortKey]) : A[sortKey];
  let b = B[sortKey] ? parseInt(B[sortKey]) : B[sortKey];
  return (!a)-(!b) || +(a>b)||-(a<b);
}

const decNum = (A,B, sortKey) => {
  let a = A[sortKey] ? parseInt(A[sortKey]) : A[sortKey];
  let b = B[sortKey] ? parseInt(B[sortKey]) : B[sortKey];
  return (!a)-(!b) || -(a>b)||+(a<b);
}

const incNested = (A,B, key) => {
  let a=A[key[0]] ? A[key[0]][key[1]] ? A[key[0]][key[1]].toLowerCase() : A[key[0]][key[1]]:A[key[0]];
  let b=B[key[0]] ? B[key[0]][key[1]] ? B[key[0]][key[1]].toLowerCase() : B[key[0]][key[1]]:B[key[0]];
  
  return (!a)-(!b) || +(a>b)||-(a<b);
}

const decNested = (A,B, key) => {
  let a=A[key[0]]?A[key[0]][key[1]]?A[key[0]][key[1]].toLowerCase():A[key[0]][key[1]]:A[key[0]];
  let b=B[key[0]]?B[key[0]][key[1]]?B[key[0]][key[1]].toLowerCase():B[key[0]][key[1]]:B[key[0]];
  
  return (!a)-(!b) || -(a>b)||+(a<b);
}

export function onSort (key, data, sortKey, type) {
  let keys = sortKey.split('.');
  try {
    if(keys.length > 1){
      this.state.sortType === "asc" ? 
      data.sort((a, b)=> decNested(a,b,keys)) : 
      data.sort((a, b)=> incNested(a,b,keys))
    }else{
      if(sortKey === "createdOn" || sortKey === "modifiedOn" || sortKey === "publishedOn"|| sortKey==="chargeAt" ){
        this.state.sortType === "asc" ? 
        data.sort((a, b)=> decDate(a,b, sortKey)) : 
        data.sort((a, b)=> incDate(a,b, sortKey))
      }else if(type === "number"||sortKey=== "notify" ||sortKey=== "amount" ){
        this.state.sortType === "asc" ? 
        data.sort((a, b)=> decNum(a,b,sortKey)) : 
        data.sort((a, b)=> incNum(a,b,sortKey))
      }else{
        this.state.sortType === "asc" ? 
        data.sort((a, b)=> dec(a,b,sortKey)) : 
        data.sort((a, b)=> inc(a,b,sortKey))
      }
    }

    this.setState((prev) => ({
      activeCol: sortKey,
      [key]: data,
      sortType: prev.sortType === "desc" ? "asc" : "desc",
    }));
  } catch (err) {
    console.log(err)
  }
};