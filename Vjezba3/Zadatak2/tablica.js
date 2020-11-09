document.write('<table>');
for (i = 1; i <= 10; i++) {
    if (i == 1) {
        document.write("<th>" + 'X' + "</th>")
    }
    document.write("<th>" + i + "</th>");
}
for (i = 1; i <= 10; i++) {
    document.write("<tr>");
    for (j = 1; j <= 10; j++) {
        if (j == 1) {
            document.write("<th>" + i + "</th>");
        }
        document.write("<td>" + j * i + "</td>")
    }
    document.write("<tr>");
}
document.write('</table>');