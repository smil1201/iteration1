/**
 * Created by raymo172 on 3/8/16.
 */
var str = "hello,hello";//first line of file
str.replace(/,/i,":");
var re = /([^:,\n\r\t]*:|[^:,\n\r\t]*\n)*/i
var matches_array = str.match(re);

var strnext ="world,world";
var renext = /([^,\n\r\t]*)*/i;
var next_matches_array = strnext.match(renext);

var another_string;

JSON.stringify($.map(matches_array, function(v,i) { return [v, array2[i]];})).replace(/:,/i,":");

var str = "hello,hello,";//first line of file
str.replace(/,/i,":");
alert(str);
var re = /(.*:)*/i
var matches_array = str.match(re);

var strnext ="world,world";
var renext = /([^,]*)*/i;
var next_matches_array = strnext.match(renext);

var another_string;

var done = JSON.stringify($.map(matches_array, function(v,i) { return [v, next_matches_array[i]];})).replace(/:,/i,":");
alert(done);
alert(matches_array);
