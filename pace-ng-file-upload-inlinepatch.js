/**!
 * patch for PACE and ng-file-upload, see https://github.com/danialfarid/ng-file-upload/issues/832
 * @author  Dufgui  <guillaume.duff@gmail.com>
 * @version 0.0.5
 */
XMLHttpRequest.prototype = Object.getPrototypeOf(new XMLHttpRequest);