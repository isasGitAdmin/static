class CsiDate extends Date {
  constructor() {
    super(...arguments);
  }
  calc(a, w) {
    var A = this.getFullYear(),
      y = this.getMonth() + 1,
      C = this.getDate(),
      G = new Date(this.getTime());
    if (a.match(/^-?[0-9]+ hour/g) != null)
      return new Date(
        G.setHours(G.getHours() + parseInt(a.match(/^-?[0-9]+/g), 10))
      );
    if (a.match(/^-?[0-9]+ minute/g) != null)
      return new Date(
        G.setMinutes(G.getMinutes() + parseInt(a.match(/^-?[0-9]+/g), 10))
      );
    if (a.match(/^-?[0-9]+ second/g) != null)
      return new Date(
        G.setSeconds(G.getSeconds() + parseInt(a.match(/^-?[0-9]+/g), 10))
      );
    a.match(/^-?[0-9]+ year$/g) != null &&
      (A += parseInt(a.match(/^-?[0-9]+/g), 10));
    if (a.match(/^-?[0-9]+ month$/g) != null) {
      for (y += parseInt(a.match(/^-?[0-9]+/g), 10); y < 1; ) A--, (y += 12);
      for (; y > 12; ) A++, (y -= 12);
      var L = new Date(A.toString() + "/" + y.toString() + "/" + C.toString());
      L.getMonth() + 1 != y &&
        ((L = new Date(A.toString() + "/" + (y + 1).toString() + "/1")),
        L.setDate(0),
        (C = L.getDate()));
    }
    a.match(/^-?[0-9]+ day$/g) != null &&
      (C += parseInt(a.match(/^-?[0-9]+/g), 10));
    a.match(/^first-of-year$/g) != null && (C = y = 1);
    a.match(/^first-of-month$/g) != null && (C = 1);
    a.match(/^first-of-week$/g) != null && (C -= this.getDay());
    y < 1 && (A--, (y = 12));
    y > 12 && (A++, (y = 1));
    return w
      ? new CsiDate(A, y - 1, C, G.getHours(), G.getMinutes(), G.getSeconds())
      : new CsiDate(A, y - 1, C);
  }
  format(a) {
    var w = this.getFullYear().toString(),
      A = ("0" + (this.getMonth() + 1)).slice(-2),
      y = ("0" + this.getDate()).slice(-2),
      C = ("0" + this.getHours()).slice(-2),
      G = ("0" + this.getMinutes()).slice(-2),
      L = ("0" + this.getSeconds()).slice(-2);
    if (a.match(/^ISO$/g))
      return this.toISOString().replace(/[0-9]{2}\.[0-9]{3}Z$/g, "00Z");
    if (a.match(/^ISOSEC$/g))
      return this.toISOString().replace(/\.[0-9]{3}Z$/g, "Z");
    if (a.match(/^ja$/g) != null)
      return (
        this > new Date("2019/4/30")
          ? ((a = "\u4ee4\u548c"), (w -= 2018))
          : this > new Date("1989/1/7")
          ? ((a = "\u5e73\u6210"), (w -= 1988))
          : this > new Date("1926/12/24")
          ? ((a = "\u662d\u548c"), (w -= 1925))
          : this > new Date("1912/7/29")
          ? ((a = "\u5927\u6b63"), (w -= 1911))
          : ((a = "\u660e\u6cbb"), (w -= 1867)),
        a + ("0" + w).slice(-2) + "\u5e74" + A + "\u6708" + y + "\u65e5"
      );
    a = a.replace(/ss/g, L);
    a = a.replace(/s/g, L);
    a = a.replace(/mm/g, G);
    a = a.replace(/i/g, G);
    a = a.replace(/(HH|hh)/g, C);
    a = a.replace(/(H|h)/g, C);
    a = a.replace(/(DD|dd)/g, y);
    a = a.replace(/(D|d)/g, y);
    a = a.replace(/MM/g, A);
    a = a.replace(/(M|m)/g, A);
    a = a.replace(/(YYYY|yyyy)/g, w);
    a = a.replace(/(YY|yy)/g, w.slice(-2));
    return (a = a.replace(/(Y|y)/g, w));
  }
}

(function (a) {
  /*
    for (
      var w = a("<div>").css({
          "box-sizing": "border-box",
          margin: "0px",
          padding: "0px",
          position: "relative",
          "vertical-align": "top",
        }),
        A = a("<span>").css({
          "box-sizing": "border-box",
          display: "inline-block",
          "line-height": "30px",
          margin: "0px",
          padding: "0px 5px",
          "vertical-align": "top",
        }),
        y = a("<button>").css({
          "background-color": "transparent",
          border: "none",
          "border-radius": "3px",
          "box-sizing": "border-box",
          color: "#FFFFFF",
          cursor: "pointer",
          "font-size": "13px",
          height: "30px",
          "line-height": "30px",
          margin: "0px 3px",
          outline: "none",
          padding: "0px 1em",
          "vertical-align": "top",
          width: "auto",
        }),
        C = a("<td>").css({
          border: "1px solid #C9C9C9",
          cursor: "pointer",
        }),
        G = a("<label>")
          .css({
            "box-sizing": "border-box",
            display: "inline-block",
            "line-height": "30px",
            margin: "0px",
            padding: "0px",
            "vertical-align": "top",
          })
          .append(a('<input type="checkbox" class="receiver">'))
          .append(
            A.clone(!0).addClass("label").css({
              padding: "0px 10px 0px 5px",
            })
          ),
        L = a("<label>")
          .css({
            "box-sizing": "border-box",
            display: "inline-block",
            "line-height": "30px",
            margin: "0px",
            padding: "0px",
            "vertical-align": "top",
          })
          .append(a('<input type="radio" class="receiver">'))
          .append(
            A.clone(!0).addClass("label").css({
              padding: "0px 10px 0px 5px",
            })
          ),
        H = w
          .clone(!0)
          .css({
            display: "inline-block",
            "line-height": "30px",
            width: "100%",
          })
          .append(
            A.clone(!0).addClass("label").css({
              overflow: "hidden",
              "padding-left": "70px",
              "text-overflow": "ellipsis",
              "white-space": "nowrap",
              width: "100%",
            })
          )
          .append(a('<input type="hidden" class="receiver">'))
          .append(a('<input type="hidden" class="key">'))
          .append(a('<input type="hidden" class="picker">'))
          .append(
            y
              .clone(!0)
              .addClass("search")
              .css({
                left: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                top: "0px",
                width: "30px",
              })
              .append(
                a(
                  '<img src="https://cdn.jsdelivr.net/gh/TIS2010/static@latest/kintone/images/search.png">'
                ).css({
                  width: "100%",
                })
              )
          )
          .append(
            y
              .clone(!0)
              .addClass("clear")
              .css({
                left: "35px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                top: "0px",
                width: "30px",
              })
              .append(
                a(
                  '<img src="https://cdn.jsdelivr.net/gh/TIS2010/static@latest/kintone/images/close.png">'
                ).css({
                  width: "100%",
                })
              )
          ),
        O = a("<select>").css({
          border: "1px solid #C9C9C9",
          "border-radius": "3px",
          "box-sizing": "border-box",
          display: "inline-block",
          height: "30px",
          "line-height": "30px",
          margin: "0px",
          padding: "0px 5px",
          "vertical-align": "top",
          width: "auto",
        }),
        T = a("<textarea>").css({
          border: "1px solid #C9C9C9",
          "border-radius": "3px",
          "box-sizing": "border-box",
          display: "block",
          height: "calc(7.5em + 10px)",
          "line-height": "1.5em",
          padding: "5px",
          "vertical-align": "top",
          width: "100%",
        }),
        M = a('<input type="text">').css({
          border: "1px solid #C9C9C9",
          "border-radius": "3px",
          "box-sizing": "border-box",
          display: "inline-block",
          height: "30px",
          "line-height": "30px",
          padding: "0px 5px",
          "vertical-align": "top",
          width: "100%",
        }),
        Q = w
          .clone(!0)
          .css({
            display: "inline-block",
            "line-height": "30px",
          })
          .append(O.clone(!0).addClass("receiverhour"))
          .append(A.clone(!0).text("\uff1a"))
          .append(O.clone(!0).addClass("receiverminute")),
        R = 0;
      R < 24;
      R++
    )
      a(".receiverhour", Q).append(
        a("<option>")
          .attr("value", ("0" + R.toString()).slice(-2))
          .text(("0" + R.toString()).slice(-2))
      );
    for (R = 0; R < 60; R++)
      a(".receiverminute", Q).append(
        a("<option>")
          .attr("value", ("0" + R.toString()).slice(-2))
          .text(("0" + R.toString()).slice(-2))
      );
    var V = a('<label class="title">').css({
        "box-sizing": "border-box",
        "border-left": "5px solid #3498db",
        display: "block",
        "line-height": "25px",
        margin: "5px 0px",
        padding: "0px",
        "padding-left": "5px",
      }),
      U = {},
      P = function (d, p, c) {
        var b = {};
        switch (d) {
          case "standard":
            b = {
              cover: w.clone(!0).css({
                "background-color": "rgba(0,0,0,0.5)",
                display: "none",
                height: "100%",
                left: "0px",
                position: "fixed",
                top: "0px",
                width: "100%",
                "z-index": "999999",
              }),
              container: w.clone(!0).css({
                "background-color": "#FFFFFF",
                bottom: "0",
                "border-radius": "5px",
                "box-shadow": "0px 0px 3px rgba(0,0,0,0.35)",
                height: p + "px",
                left: "0",
                margin: "auto",
                "max-height": "calc(100% - 1em)",
                "max-width": "calc(100% - 1em)",
                padding: "5px 5px 40px 5px",
                position: "absolute",
                right: "0",
                top: "0",
                width: c + "px",
              }),
              contents: w.clone(!0).css({
                height: "100%",
                margin: "0px",
                overflow: "auto",
                padding: "5px 5px 10px 5px",
                position: "relative",
                "text-align": "left",
                width: "100%",
                "z-index": "1",
              }),
              header: w
                .clone(!0)
                .css({
                  "background-color": "#3498db",
                  "border-top-left-radius": "5px",
                  "border-top-right-radius": "5px",
                  left: "0px",
                  padding: "5px",
                  position: "absolute",
                  "text-align": "left",
                  top: "0px",
                  width: "100%",
                  "z-index": "3",
                })
                .append(
                  w
                    .clone(!0)
                    .css({
                      display: "inline-block",
                      "vertical-align": "top",
                      width: "100%",
                    })
                    .addClass("main")
                )
                .append(
                  w
                    .clone(!0)
                    .css({
                      display: "inline-block",
                      "vertical-align": "top",
                      width: "0px",
                    })
                    .addClass("sub")
                ),
              footer: w.clone(!0).css({
                "background-color": "#3498db",
                "border-bottom-left-radius": "5px",
                "border-bottom-right-radius": "5px",
                bottom: "0px",
                left: "0px",
                padding: "5px",
                position: "absolute",
                "text-align": "center",
                width: "100%",
                "z-index": "3",
              }),
              lists: a("<table>")
                .css({
                  "box-sizing": "border-box",
                  width: "100%",
                })
                .append(a("<tbody>")),
            };
            break;
          case "dark":
            b = {
              button: a("<img>").css({
                "background-color": "transparent",
                border: "none",
                "border-radius": "50%",
                "box-sizing": "border-box",
                cursor: "pointer",
                display: "inline-block",
                height: "3em",
                margin: "0px",
                "vertical-align": "top",
                width: "3em",
              }),
              cover: w.clone(!0).css({
                "background-color": "rgba(0,0,0,0.5)",
                display: "none",
                height: "100%",
                left: "0px",
                position: "fixed",
                top: "0px",
                width: "100%",
                "z-index": "999999",
              }),
              container: w.clone(!0).css({
                "background-color": "rgba(0,0,0,0.5)",
                bottom: "0",
                "border-radius": "1em",
                "box-shadow": "0px 0px 3px rgba(0,0,0,0.35)",
                height: "calc(100% - 2em)",
                left: "0",
                margin: "auto",
                padding: "0.5em 1em 1em 1em",
                position: "absolute",
                right: "0",
                top: "0",
                width: "calc(100% - 2em)",
              }),
              contents: w.clone(!0).css({
                height: "calc(100% - 3.5em)",
                "margin-top": "0.5em",
                padding: "0",
                position: "relative",
                "text-align": "center",
                width: "100%",
              }),
              header: w.clone(!0).css({
                margin: "0",
                padding: "0",
                "text-align": "right",
                width: "100%",
              }),
            };
        }
        return b;
      };
*/
/*
  jCsi.fn.thumbnailbrowser = function (d) {
    var p = function (c) {
      c = a.extend(
        !0,
        {
          container: null,
        },
        c
      );
*/
      /*
      var b = this;
      this.active = 0;
      this.thumbnails = [];
      this.dialog = P("dark");
      this.dialog.contents.css({
        overflow: "hidden",
        "white-space": "nowrap",
      });
      this.move = function () {
        for (var f = 0, e = 0; e < b.thumbnails.length; e++)
          (f += 100),
            e < b.active
              ? b.thumbnails[e].css({
                  transform: "translateX(-" + f.toString() + "%)",
                })
              : e > b.active
              ? b.thumbnails[e].css({
                  transform: "translateX(" + f.toString() + "%)",
                })
              : ((f -= 100),
                b.thumbnails[e].css({
                  transform: "translateX(-" + f.toString() + "%)",
                }));
      };
      c.container.append(
        this.dialog.cover.append(
          this.dialog.container
            .append(
              this.dialog.header.append(
                this.dialog.button
                  .clone(!0)
                  .attr(
                    "src",
                    "https://cdn.jsdelivr.net/gh/TIS2010/static@latest/kintone/images/browse_close.svg"
                  )
                  .on("click", function () {
                    b.hide();
                  })
              )
            )
            .append(this.dialog.contents)
            .append(
              this.dialog.button
                .clone(!0)
                .css({
                  left: "0",
                  position: "absolute",
                  top: "50%",
                  "-webkit-transform": "translate(0%,-50%)",
                  "-ms-transform": "translate(0%,-50%)",
                  transform: "translate(0%,-50%)",
                })
                .attr(
                  "src",
                  "https://cdn.jsdelivr.net/gh/TIS2010/static@latest/kintone/images/browse_prev.svg"
                )
                .on("click", function () {
                  b.active > 0 && b.active--;
                  b.move();
                })
            )
            .append(
              this.dialog.button
                .clone(!0)
                .css({
                  position: "absolute",
                  right: "0",
                  top: "50%",
                  "-webkit-transform": "translate(0%,-50%)",
                  "-ms-transform": "translate(0%,-50%)",
                  transform: "translate(0%,-50%)",
                })
                .attr(
                  "src",
                  "https://cdn.jsdelivr.net/gh/TIS2010/static@latest/kintone/images/browse_next.svg"
                )
                .on("click", function () {
                  b.active < b.thumbnails.length - 1 && b.active++;
                  b.move();
                })
            )
        )
      );
*/
/*
};
    p.prototype = {
      show: function (c, b, f) {
        var e = this,
          m = function (k) {
            (function (l, g) {
              e.thumbnails.push(g);
              e.dialog.contents.append(g);
              a.download(l.fileKey).then(function (r) {
                var n = window.URL || window.webkitURL;
                g.append(
                  a("<img>")
                    .css({
                      "box-sizing": "border-box",
                      display: "block",
                      left: "50%",
                      "max-height": "calc(100% - 2em)",
                      "max-width": "calc(100% - 2em)",
                      position: "absolute",
                      top: "50%",
                      "-webkit-transform": "translate(-50%,-50%)",
                      "-ms-transform": "translate(-50%,-50%)",
                      transform: "translate(-50%,-50%)",
                    })
                    .attr("src", n.createObjectURL(r))
                    .on("click", function () {
                      f && f(l);
                    })
                );
              });
            })(
              c[k],
              w.clone(!0).css({
                display: "inline-block",
                height: "100%",
                transition: "all 0.35s ease-out 0s",
                width: "100%",
              })
            );
            k++;
            k < c.length && m(k);
          };
        c.length != 0 &&
          ((e.thumbnails = []),
          e.dialog.contents.empty(),
          m(0),
          e.dialog.cover.show(),
          (e.active = b),
          e.move());
      },
      hide: function () {
        this.dialog.cover.hide();
      },
    };
    return new p(
      a.extend(
        !0,
        {
          container: a(this),
        },
        d
      )
    );
  };
  a("body").append(
    a("<style>")
      .attr("type", "text/css")
      .text("*.swalTis-overlay{z-index:1000000;}")
  );
*/
/*
  a(".kintoneplugin-row").length &&
    (a(".kintoneplugin-tab-container").length &&
      (function (d) {
        if (!d.hasClass("ocean-page-market-app-html")) {
          var p =
            parseInt(d.css("margin-left") || 0, 10) +
            parseInt(d.css("margin-right") || 0, 10);
          d.siblings().each(function (c) {
            a(this) != d && (p += a(this).outerWidth(!1));
          });
          d.css({
            width: "calc(100% - " + p.toString() + "px)",
          });
        }
      })(a(".kintoneplugin-row").parent().parent()),
    a("body").append(
      a("<style>")
        .attr("type", "text/css")
        .text("kintoneplugin-table{border-collapse:collapse;}")
    ));
*/
    window.csi_authorize_handler ||
    (window.csi_authorize_handler = function (d) {
      if (localStorage.getItem("csi-plugins-installdate")) {
        if (
          new CsiDate(
            localStorage.getItem("csi-plugins-installdate").replace(/-/g, "/")
          ).calc("-1 month") < new CsiDate()
        ) {
          var p = window.location.host.split(".")[0],
            c = localStorage.getItem(
              "csi-plugins-displaydate-" + kintone.app.getId()
            )
              ? localStorage.getItem(
                  "csi-plugins-displaydate-" + kintone.app.getId()
                )
              : new CsiDate().calc("-1 day").format("Y-m-d");
          /*
            a(".csi-plugins-information-dialog-button").length || c == new CsiDate().format("Y-m-d") || ((c = null),
              localStorage.getItem("csi-plugins-displaytime-" + kintone.app.getId()) ? (c = parseInt(localStorage.getItem("csi-plugins-displaytime-" + kintone.app.getId()))) : ((c = new CsiDate().getHours()), (c = c < 15 ? Math.floor(Math.random() * (15 - c)) + c : c - 1), localStorage.setItem("csi-plugins-displaytime-" + kintone.app.getId(), c.toString())),
              new CsiDate().getHours() > c &&
                (localStorage.setItem("csi-plugins-displaydate-" + kintone.app.getId(), new CsiDate().format("Y-m-d")),
                localStorage.removeItem("csi-plugins-displaytime-" + kintone.app.getId()),
            */
          fetch("https://api.kintone-booster.com/authorize?id=" + p, {
            method: "GET",
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          })
            .then(function (b) {
              b.json().then(function (f) {
                switch (b.status) {
                  case 200:
                    if (f.result != "ok") {
                      var e = a("<div>").css({
                          "box-sizing": "border-box",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          "vertical-align": "top",
                        }),
                        m = e.clone(!0).css({
                          "background-color": "rgba(0,0,0,0.5)",
                          height: "100%",
                          left: "0px",
                          position: "fixed",
                          top: "0px",
                          width: "100%",
                          "z-index": "99999999",
                        });
                      f = e.clone(!0).css({
                        "background-color": "#FFFFFF",
                        bottom: "0",
                        "border-radius": "5px",
                        "box-shadow": "0px 0px 3px rgba(0,0,0,0.35)",
                        height: "575px",
                        left: "0",
                        margin: "auto",
                        "max-height": "calc(100% - 1em)",
                        "max-width": "calc(100% - 1em)",
                        padding: "5px",
                        position: "absolute",
                        right: "0",
                        "text-align": "center",
                        top: "0",
                        width: "600px",
                      });
                      e = e.clone(!0).css({
                        height: "100%",
                        margin: "0px",
                        "overflow-x": "hidden",
                        "overflow-y": "auto",
                        padding: "5px",
                        position: "relative",
                        "text-align": "center",
                        width: "100%",
                        "z-index": "1",
                      });
                      e.append(
                        a("<h2>")
                          .css({
                            "font-size": "1.5em",
                            "font-weight": "normal",
                          })
                          .html(
                            kintone.getLoginUser().language == "ja"
                              ? "ISAS\u304b\u3089\u306e\u3054\u9023\u7d61"
                              : "Contact from ISAS"
                          )
                      )
                        .append(
                          a("<p>")
                            .css({
                              "line-height": "1.5em",
                              padding: "0 2em",
                            })
                            .html(
                              (function () {
                                var k = "";
                                switch (kintone.getLoginUser().language) {
                                  case "ja":
                                    k +=
                                      '<p>\u73fe\u5728\u3054\u5229\u7528\u4e2d\u306eISAS\u88fd\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5229\u7528\u7533\u8acb\u304c\u884c\u308f\u308c\u3066\u304a\u308a\u307e\u305b\u3093\u3002<br>\u3053\u306e\u307e\u307e\u5229\u7528\u3057\u7d9a\u3051\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u304c\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u975e\u8868\u793a\u306b\u3057\u305f\u3044\u5834\u5408\u306f\u30b5\u30dd\u30fc\u30c8\u30b5\u30a4\u30c8\u3088\u308a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5229\u7528\u7533\u8acb\u3092\u304a\u9858\u3044\u81f4\u3057\u307e\u3059\u3002</p><p>\u30b5\u30dd\u30fc\u30c8\u30b5\u30a4\u30c8\u306f\u3053\u3061\u3089&nbsp;<a href="https://with-you.support" target="_blank">https://with-you.support</a></p>';
                                    break;
                                  case "en":
                                    k +=
                                      '<p>The ISAS plug-in has been used for one month.</p><p>The plug-in can continue being used as-is, but to prevent this pop-up message from being displayed, click <a href="https://with-you.support" target="_blank">here</a>.</p>';
                                    break;
                                  case "zh":
                                    k +=
                                      '<p>ISAS\u63d2\u4ef6\u5df2\u7ecf\u4f7f\u7528\u4e00\u4e2a\u6708\u4e86\u3002</p><p>\u8be5\u63d2\u4ef6\u53ef\u4ee5\u7ee7\u7eed\u6309\u539f\u6837\u4f7f\u7528\uff0c\u4f46\u8981\u9632\u6b62\u663e\u793a\u6b64\u5f39\u51fa\u6d88\u606f\uff0c<a href="https://with-you.support" target="_blank">\u8bf7\u5355\u51fb\u6b64\u5904</a>\u3002</p>';
                                }
                                return k;
                              })()
                            )
                        )
                        .append(
                          a("<img>")
                            .css({
                              "max-width": "100%",
                            })
                            .attr(
                              "src",
                              "data:image/png;base64,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"
                            )
                        )
                        .append(
                          a("<button>")
                            .css({
                              "background-color": "#65AB31",
                              border: "none",
                              "border-radius": "0.25em",
                              color: "#FFFFFF",
                              display: "block",
                              "line-height": "3em",
                              margin: "0 auto",
                              "margin-top": "1em",
                              "min-width": "8.25em",
                              outline: "none",
                              padding: "0px 0.5em",
                              "text-align": "center",
                            })
                            .addClass("csi-plugins-information-dialog-button")
                            .html("CLOSE")
                            .on("click", function (k) {
                              m.hide();
                            })
                        );
                      a("body").append(m.append(f.append(e)));
                    }
                    break;
                  default:
                    console.log(f.error);
                }
              });
            })
            .catch(function (b) {
              console.log(b);
            });
          // ))
        }
      } else
        localStorage.setItem(
          "csi-plugins-installdate",
          new CsiDate().format("Y-m-d")
        );
      return d;
    });
  kintone.events.off("app.record.index.show", window.csi_authorize_handler);
  kintone.events.on("app.record.index.show", window.csi_authorize_handler);
})(jCsi);
