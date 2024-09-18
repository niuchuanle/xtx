import httpInstance from "@/utils/http.js";
import http from "@/utils/http.js";

export function  getCategory(){
  return  httpInstance({
       url:'home/category/head'
   })
}
