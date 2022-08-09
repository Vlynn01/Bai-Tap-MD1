let login = prompt("Nhập");
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'giamdoc') ?
        'Chào giám đốc' :
        (login == '') ?
            'No login' :
            '';
alert(message);
