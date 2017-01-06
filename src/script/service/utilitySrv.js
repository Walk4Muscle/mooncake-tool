module.exports = function ($filter) {
    Date.prototype.format = function (format) {
        var o = {
            "M+": this.getUTCMonth() + 1,
            // month
            "d+": this.getUTCDate(),
            // day
            "h+": this.getUTCHours(),
            // hour
            "m+": this.getUTCMinutes(),
            // minute
            "s+": this.getUTCSeconds(),
            // second
            "q+": Math.floor((this.getUTCMonth() + 3) / 3),
            // quarter
            "S": this.getUTCMilliseconds()
            // millisecond
        };
        if (/(y+)/.test(format) || /(Y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getUTCFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format; 
    };
    return {
        toPercent: function (data, decimal) {
            return parseFloat(parseFloat(data * 100).toFixed(decimal));
        },
        getLastXMonthDate: function (x) {
            var m = new Date();
            m.setDate(1);
            m.setUTCMonth(m.getUTCMonth() - parseInt(x) - 1);
            return m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate();
        },
        timeToString: function (timestamp) {
            return (new Date(timestamp * 1000)).format("yyyy/MM/dd hh:mm");
        }
    }
};