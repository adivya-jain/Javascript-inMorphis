function getCurrentDateFormats() {
      const today = new Date();

      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0'); 
      const year = today.getFullYear();

      const format1 = `${month}-${day}-${year}`;
      const format2 = `${month}/${day}/${year}`;
      const format3 = `${day}-${month}-${year}`;
      const format4 = `${day}/${month}/${year}`;

      return {
        'mm-dd-yyyy': format1,
        'mm/dd/yyyy': format2,
        'dd-mm-yyyy': format3,
        'dd/mm/yyyy': format4
      };
    }

    const dateFormats = getCurrentDateFormats();
    console.log("Current date formats:");
    console.log("mm-dd-yyyy: " + dateFormats['mm-dd-yyyy']);
    console.log("mm/dd/yyyy: " + dateFormats['mm/dd/yyyy']);
    console.log("dd-mm-yyyy: " + dateFormats['dd-mm-yyyy']);
    console.log("dd/mm/yyyy: " + dateFormats['dd/mm/yyyy']);