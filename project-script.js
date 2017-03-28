(function () {
   'use strict';

    angular.module('app', [])
        .controller('MyController', [ '$scope', function($scope){
          $scope.projects = $scope.projects = [
            {
              title:"Pomodoro Clock",
              description:"A pomodoro clock designed to help you stay focused on work. Adjustable work session and break times in a convenient UI. ",
              url:"#",
              background:"http://res.cloudinary.com/nwright/image/upload/v1490723947/2017-03-28-10-52-codepen.io_z272ej.png",
              position:'59% -12px'
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
              background:"http://res.cloudinary.com/nwright/image/upload/v1490723956/2017-03-28-10-53-codepen.io_mnxiiw.png",
              position:'29% 36%'
              
            },
            {
              title:'Wiki-Viewer',
              description:'Search wikipedia for interesting articles',
              url:"#",
              background:"http://res.cloudinary.com/nwright/image/upload/v1490723977/2017-03-28-10-56-codepen.io_j0ybmu.png",
              position:'37% 20px'
            },
            {
              title:'Javascript Calculator',
              description:'A functional online calculator made with Javascript and JQuery',
              url:"#",
              background:"http://res.cloudinary.com/nwright/image/upload/v1490723971/2017-03-28-10-55-codepen.io_ug5fh2.png",
              position:'51% 2%'
            },
            {
              title:'Quote Generator',
              description:'Generates quotes using a free API. Find a quote you like and post it to Twitter',
              url:"#",
              background:"http://res.cloudinary.com/nwright/image/upload/v1490723964/2017-03-28-10-54-codepen.io_numvjn.png",
              position:'35% 4%'
            }]
        }
      
    ]);

})();