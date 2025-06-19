function Longest_Country_Name(countries) {
    return countries.reduce((longest, current) =>
        current.length > longest.length ? current : longest
    );
}

const countries = ["Australia", "Germany", "United States of America"];
console.log(Longest_Country_Name(countries)); 
