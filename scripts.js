const images = [
    {
      url: 'p.png',
      details: {
        'Project Name': 'Double Storage House 2450 Sq. Feet',
        Client: 'Mr.Kunjumon N.R',
        'Project Consultant': '4f Builders',
        'Project Value': '59 Lakhs',
        'Project Duration': '13 months',
        Location: 'Keerukuzhi, Thumpamon, Pathanamthitta'
      }
    },
    {
      url: 'p (2).png',
      details: {
        'Project Name': 'Interior work',
        Client: 'Mr.Anil Kumar',
        'Project Consultant': '4f Builders',
        'Project Value': '20 Lakhs',
        'Project Duration': '6 months',
        Location: 'Chengannur Alappuzha'
      }
    },
    {
      url: 'p (3).png',
      details: {
        'Project Name': 'Single Storage House 1500 Sq. Feet',
        Client: 'Mr.Satheesan',
        'Project Consultant': '4f Builders',
        'Project Value': '30 Lakhs',
        'Project Duration': '6 months',
        Location: 'Pandalam Pathanamthitta'
      }
    },
    {url: 'p (5).png',
    details: {
        'Project Name': 'House 2650 Sq. Feet',
        Client: ' Mr. Aneesh',
        'Project Consultant': 'Sree Ram',
        'Project Value': '14 lakhs',
        'Project Duration': '9 months',
        Location: ' Chengannur'
    }},

{
    url: 'p (6).png',
    details: {
        'Project Name': 'G+2 Residential Bldg.',
        Client: '  Mr. Khalid AmurAl Badi',
        'Project Consultant': '4f Builders',
        'Project Value': '126000 OMR',
        'Project Duration': '9 months',
        Location: ' Sohar Oman'
    }
},
{
    url: 'p (7).png',
    details: {
        'Project Name': 'G+3 Residential Bldg.',
        Client: ' Mr. Fatima Bin Shafi',
        'Project Consultant': '4f Builders',
        'Project Value': '168000 OMR',
        'Project Duration': '11 months',
        Location: ' Sohar Oman'
    }
},
{
    url: 'p (8).png',
    details: {
        'Project Name': 'Villa 2450 Sq. M',
        Client: 'Shabina Koroth',
        'Project Consultant': '4f Builders',
        'Project Value': '50 Lakhs',
        'Project Duration': '16 months',
        Location: ' Kannur, Kerala'
    }
},
{
    url: 'p (9).png',
    details: {
        'Project Name': 'Flood relief houses x 6 Nos',
        Client: 'Sri Sathya Sai Trust, Kerala',
        'Project Consultant': '4f Builders',
        'Project Value': '55 Lakhs',
        'Project Duration': '10 months',
        Location: ' Noornad, Alappuzha, Kerala'
    }
},
{
    url: 'p (10).png',
    details: {
        'Project Name': 'Anganwadi x 6 Nos',
        Client: 'Sri Sathya Sai Trust, Kerala',
        'Project Consultant': '4f Builders',
        'Project Value': '55 Lakhs',
        'Project Duration': '13 months',
        Location: ' Noornad, Alappuzha, Kerala'
    }
},
{
    url: 'p (11).png',
    details: {
        'Project Name': 'Villa 1395 Sq. Feet',
        Client: 'Ashish Nooranadu',
        'Project Consultant': '4f Builders',
        'Project Value': '40 Lakhs',
        'Project Duration': '10 months',
        Location: ' Noornad, Alappuzha, Kerala'
    }
},
  ];
  
  let currentIndex = 0;
  
  function updateSlideshow() {
    const image = images[currentIndex];
    document.getElementById('slideshow-image').src = image.url;
  
    const detailsElement = document.getElementById('image-details');
    detailsElement.innerHTML = '';
    for (const [key, value] of Object.entries(image.details)) {
      const row = document.createElement('tr');
      const keyCell = document.createElement('td');
      const valueCell = document.createElement('td');
      keyCell.textContent = key;
      valueCell.textContent = value;
      row.appendChild(keyCell);
      row.appendChild(valueCell);
      detailsElement.appendChild(row);
    }
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlideshow();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlideshow();
  }
  
  window.onload = updateSlideshow;
  