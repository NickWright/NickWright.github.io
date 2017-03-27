(function () {
   'use strict';

    angular.module('app', [])
        .controller('MyController', [ '$scope', function($scope){
          $scope.projects = $scope.projects = [
            {
              title:"Pomodoro Clock",
              description:"A pomodoro clock designed to help you stay focused on work. Adjustable work session and break times in a convenient UI. ",
              url:"#",
              background:"http://res.cloudinary.com/nwright/image/upload/v1490629584/2017-03-27-08-27-codepen.io_bk8bv2.png",
              position:'50%'
            },
            {
              title:"Tic Tac Toe",
              description:'Try your hand at Tic Tac Toe against the Minimax algorithm. It hasn\'t been beaten yet. ',
              url:"#",
              background:"http://res.cloudinary.com/nwright/image/upload/v1490629542/2017-03-27-08-45-s.codepen.io_xofhqo.png",
              position:'46% 22%'
            },
            {
              title:'Simon',
              description:'Test your memory with a game of Simon. Can be set to strict mode which will set you back to the beginning if you make a mistake. ',
              url:"#",
              background:"http://res.cloudinary.com/nwright/image/upload/v1490629564/2017-03-27-08-31-codepen.io_nl2zcm.png",
              position:'32% 36%'
              
            },
            {
              title:'Wiki-Viewer',
              description:'Search wikipedia for interesting articles',
              url:"#",
              background:"http://res.cloudinary.com/nwright/image/upload/c_scale,h_300,w_300/v1489679587/2017-03-16-08-39-s.codepen.io_oqfxsc.png",
              position:'0 20px'
            },
            {
              title:'Javascript Calculator',
              description:'A functional online calculator made with Javascript and JQuery',
              url:"#",
              background:"http://res.cloudinary.com/nwright/image/upload/v1490629570/2017-03-27-08-30-codepen.io_zqdruo.png",
              position:'52% 2%'
            },
            {
              title:'Quote Generator',
              description:'Generates quotes using a free API. Find a quote you like and post it to Twitter',
              url:"#",
              background:"http://res.cloudinary.com/nwright/image/upload/v1490629739/2017-03-27-08-48-codepen.io_mrgfka.png",
              position:'35% 4%'
            }]
        }
      
    ]);

})();