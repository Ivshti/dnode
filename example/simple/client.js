var dnode = require('../../');

dnode.connect(7070, function (remote, conn) {
    remote.zing(33, function (n, d) {
        console.log('n=' + n+" at "+d.getTime());
        conn.end();
    });
});
