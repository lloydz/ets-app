;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-icon-liebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M 63.6747 150.312 c 0 22.5127 18.4195 40.9322 40.9322 40.9322 l 46.0488 0 c 22.5127 0 40.9322 -18.4195 40.9322 -40.9322 l 0 -46.0488 c 0 -22.5127 -18.4195 -40.9322 -40.9322 -40.9322 l -46.0488 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9322 L 63.6747 150.312 Z"  ></path>' +
    '' +
    '<path d="M 283.631 106.822 c -11.2564 0 -20.4661 9.20976 -20.4661 20.4661 l 0 0 c 0 11.2564 9.20976 20.4661 20.4661 20.4661 l 654.916 0 c 11.2564 0 20.4661 -9.20976 20.4661 -20.4661 l 0 0 c 0 -11.2564 -9.20976 -20.4661 -20.4661 -20.4661 L 283.631 106.822 Z"  ></path>' +
    '' +
    '<path d="M 63.6747 534.464 c 0 22.5127 18.4195 40.9322 40.9322 40.9322 l 46.0488 0 c 22.5127 0 40.9322 -18.4195 40.9322 -40.9322 l 0 -46.0488 c 0 -22.5127 -18.4195 -40.9322 -40.9322 -40.9322 l -46.0488 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9322 L 63.6747 534.464 Z"  ></path>' +
    '' +
    '<path d="M 263.165 511.439 c 0 11.2564 9.20976 20.4661 20.4661 20.4661 l 654.916 0 c 11.2564 0 20.4661 -9.20976 20.4661 -20.4661 l 0 0 c 0 -11.2564 -9.20976 -20.4661 -20.4661 -20.4661 l -654.916 0 C 272.375 490.973 263.165 500.183 263.165 511.439 L 263.165 511.439 Z"  ></path>' +
    '' +
    '<path d="M 63.6747 919.056 c 0 22.5127 18.4195 40.9322 40.9322 40.9322 l 46.0488 0 c 22.5127 0 40.9322 -18.4195 40.9322 -40.9322 l 0 -46.0488 c 0 -22.5127 -18.4195 -40.9322 -40.9322 -40.9322 l -46.0488 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9322 L 63.6747 919.056 Z"  ></path>' +
    '' +
    '<path d="M 263.164 896.031 c 0 11.2564 9.20976 20.4661 20.4661 20.4661 l 654.916 0 c 11.2564 0 20.4661 -9.20976 20.4661 -20.4661 l 0 0 c 0 -11.2564 -9.20976 -20.4661 -20.4661 -20.4661 l -654.916 0 C 272.374 875.565 263.164 884.775 263.164 896.031 L 263.164 896.031 Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinjian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M700.719152 488.409722 535.589254 488.409722 535.589254 323.280848c0-13.021571-10.568706-23.590278-23.590278-23.590278s-23.590278 10.568706-23.590278 23.590278l0 165.128875L323.280848 488.409722c-13.021571 0-23.590278 10.568706-23.590278 23.590278s10.568706 23.590278 23.590278 23.590278l165.128875 0 0 165.128875c0 13.021571 10.568706 23.590278 23.590278 23.590278s23.590278-10.568706 23.590278-23.590278L535.590278 535.589254l165.128875 0c13.021571 0 23.590278-10.568706 23.590278-23.590278S713.740724 488.409722 700.719152 488.409722z"  ></path>' +
    '' +
    '<path d="M512 63.791885c-247.536746 0-448.208115 200.671369-448.208115 448.208115s200.671369 448.208115 448.208115 448.208115 448.208115-200.671369 448.208115-448.208115S759.536746 63.791885 512 63.791885zM512 913.028583c-221.47723 0-401.028583-179.550329-401.028583-401.028583S290.521746 110.971417 512 110.971417 913.028583 290.521746 913.028583 512 733.47723 913.028583 512 913.028583z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)