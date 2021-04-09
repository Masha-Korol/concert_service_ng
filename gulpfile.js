const gulp = require('gulp');
const war = require('gulp-war');
const zip = require('gulp-zip');

gulp.task('war', function (callback) {
    gulp.src(['./dist/game-angular/**'])
        .pipe(war({
                welcome: 'index.html',
                displayName: 'game-angular',
        }))
        .pipe(zip('game-angular.war'))
        .pipe(gulp.dest("./dist"));
        callback();
});