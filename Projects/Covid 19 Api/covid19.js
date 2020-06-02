fetch('https://api.covid19api.com/summary')
    .then(response => {
        return response.json()
    })
    .then(data => {
        let tableData = []
        tableData.push(data.Global)
            data = `

            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.TotalDeaths}</td>
            <td>${data.Global.TotalRecovered}</td>

            `
        let table = document.getElementById('data')
        table.innerHTML = data

        
        console.log(tableData)
        d3.select('.totalCases').selectAll('div')
            .data(tableData)
            .enter()
            .append('div')
            .text(function(d) {
                return d.TotalConfirmed + ':' + ' Total Cases'
            })
            .attr('class', 'bar')
            .style('width', function(d) {
                return d.TotalConfirmed / 15000 + 'px'
            })
        
        d3.select('.totalDeaths').selectAll('div')
            .data(tableData)
            .enter()
            .append('div')
            .text(function(d) {
                return d.TotalDeaths + ':' + ' Total Deaths'
            })
            .attr('class', 'bar')
            .style('width', function(d) {
                return d.TotalDeaths / 3000 + 'px'
            })
        
        d3.select('.totalRecovered').selectAll('div')
            .data(tableData)
            .enter()
            .append('div')
            .text(function(d) {
                return d.TotalRecovered + ':' + ' Total Recovered'
            })
            .attr('class', 'bar')
            .style('width', function(d) {
                return d.TotalRecovered / 10000 + 'px'
            })
        

    })

    function refreshData(){
        location.reload()
    }