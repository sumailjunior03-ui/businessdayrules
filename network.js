/**
 * network.js — Related Tools Network
 * BusinessDayRules.com
 * Renders live tools into the footer.
 */

(function () {
  "use strict";

  var NETWORK_TOOLS = [
    {
      name: "BizDayChecker.com",
      url: "https://bizdaychecker.com",
      description: "Check whether a date is a business day and count business days between dates.",
      live: true
    },
    {
      name: "BankCutoffChecker.com",
      url: "https://bankcutoffchecker.com",
      description: "Check bank cutoff times and when your payment will post.",
      live: true
    },
    {
      name: "PayrollDateChecker.com",
      url: "https://payrolldatechecker.com",
      description: "Find your actual payday accounting for weekends and holidays.",
      live: true
    }
  ];

  function renderRelatedTools() {
    var container = document.getElementById("footer-related-tools-list");
    if (!container) return;

    var liveTools = NETWORK_TOOLS.filter(function (t) { return t.live === true; });

    if (liveTools.length === 0) {
      container.innerHTML = "<li><span style='color:rgba(255,255,255,0.35)'>No tools available</span></li>";
      return;
    }

    var html = "";
    liveTools.forEach(function (tool) {
      html += "<li><a href=\"" + tool.url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + tool.name + "</a></li>";
    });

    container.innerHTML = html;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderRelatedTools);
  } else {
    renderRelatedTools();
  }

})();