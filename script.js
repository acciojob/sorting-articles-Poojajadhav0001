//your JS code here. If required.
const bands = [
      'The Plot in You',
      'The Devil Wears Prada',
      'Pierce the Veil',
      'Norma Jean',
      'The Bled',
      'Say Anything',
      'The Midway State',
      'We Came as Romans',
      'Counterparts',
      'Oh, Sleeper',
      'A Skylit Drive',
      'Anywhere But Here',
      'An Old Dog'
    ];

    // article (a, an, the) काढण्यासाठी helper function
    function stripArticle(name) {
      return name.replace(/^(a |an |the )/i, '').trim();
    }

    // sorting logic
    const sortedBands = bands.sort((a, b) => {
      const nameA = stripArticle(a).toLowerCase();
      const nameB = stripArticle(b).toLowerCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    // DOM मध्ये list render करा
    const ul = document.getElementById("band");

    sortedBands.forEach(band => {
      const li = document.createElement("li");
      li.textContent = band;
      ul.appendChild(li);
    });