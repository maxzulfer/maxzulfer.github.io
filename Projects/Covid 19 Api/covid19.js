fetch('https://api.covid19api.com/summary')
    .then(response => {
        return response.json()
    })
    .then(data => {
        let tableData = data.Global
    
            data = `

            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.TotalDeaths}</td>
            <td>${data.Global.TotalRecovered}</td>

            `
        let table = document.getElementById('data')
        table.innerHTML = data


        
        console.log(tableData)
        d3.select('table')
            .data(tableData)
            .enter()
            .append('div')
            .text(function(d) {
                return d.TotalConfirmed
            })
            .attr('class', 'bar')
            .style('width', function(d) {
                return d.TotalConfirmed * 50 + 'px'
            })
        
    })
    function refreshData(){
        location.reload()
    }
