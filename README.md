### How to Run
Please run the proxy first
````bash
node proxy.js
````

### How the API response Structured

We are getting the data from Line Today API.

Here is the structure
```
result
 category[]
  template[]
   section[]
    article[]:
     - title
     - thumnail:
       -type: IMAGE, VIDEO
       -hash: https://obs.line-scdn.net/
     - url:
        - string url
```


