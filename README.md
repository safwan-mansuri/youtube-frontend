# Youtube History Stats

### Problem Statement

Get the youtube history stats in order to optimize the time on youtube. 

### Solution

1. download the youtube history data from `https://takeout.google.com/u/0/` in json form.
2. visit https://github.com/safwan-mansuri/youtube-backend for backend implementation.

### Architecture.

![Screenshot 2021-05-15 at 6 18 45 PM](https://user-images.githubusercontent.com/82272505/118361641-ff2a6100-b5a9-11eb-889d-226963b0fa86.png)

1. upload the `watch history json` file.
2. `post` request is to be made on route `/upload'.
3. file will be saved on `ipfs` for decentralized storage.
4. caching is done to store the category of the video based on `videoid` and also it is done in order to retrive the data in jiffy.  

### Demo of downloading the history json file.
https://user-images.githubusercontent.com/82272505/118361797-92639680-b5aa-11eb-9538-feda79b0dd46.mov

### website demo.
https://user-images.githubusercontent.com/82272505/118361801-92fc2d00-b5aa-11eb-9b54-cdcc62980b9b.mov
