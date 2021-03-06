/**
 * numbers.js
 * http://github.com/sjkaliski/numbers.js
 *
 * Copyright 2012 Stephen Kaliski
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var numbers = exports;


// Expose methods
numbers.basic = require('./numbers.js-master/lib/numbers/basic');
numbers.calculus = require('./numbers.js-master/lib/numbers/calculus');
numbers.complex = require('./numbers.js-master/lib/numbers/complex');
numbers.dsp = require('./numbers.js-master/lib/numbers/dsp');
numbers.matrix = require('./numbers.js-master/lib/numbers/matrix');
numbers.prime = require('./numbers.js-master/lib/numbers/prime');
numbers.statistic = require('./numbers.js-master/lib/numbers/statistic');
numbers.generate = require('./numbers.js-master/lib/numbers/generators');
numbers.random = require('./numbers.js-master/lib/numbers/random');

/**
 * @property {Number} EPSILON Epsilon (error bound) to be used
 * in calculations. Can be set and retrieved freely.
 *
 * Given the float-point handling by JavaScript, as well as
 * the numbersal proficiency of some methods, it is common
 * practice to include a bound by which discrepency between
 * the "true" answer and the returned value is acceptable.
 *
 * If no value is provided, 0.001 is default.
 */
numbers.EPSILON = 0.001;
