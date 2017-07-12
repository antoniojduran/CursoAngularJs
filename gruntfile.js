module.exports = function(grunt){
grunt.initConfig({

jshint: {
	all: ['script1.js']
},

concat : {
dist : {
	src : ['script1.js','script2.js','script3.js'],
	dest: 'unidos.js'  
       }	
},
});
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.registerTask('default',['jshint','concat']);

};