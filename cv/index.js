const make_skills = () => {
  const skills = [
    {
      title: 'Languages',
      descriptions: ['C, C++. Java, Python, HTML, CSS, Javascript']
    },
    {
      title: 'Technologies/Frameworks',
      descriptions: [
        'Git, Bazel, Cmake, Docker, Flask, Python, AWS, GCP, Node.js, React, Android'
      ]
    }
  ];

  let list = document.createElement('ul');
  list.className = 'skill-list';
  for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');

    let title = document.createElement('p');
    title.className = 'skill-title';
    title.innerHTML = skills[i].title;
    skill.appendChild(title);

    let descriptions = document.createElement('ul');
    descriptions.className = 'skill-descriptions';
    for (let description of skills[i].descriptions) {
      let li = document.createElement('li');
      li.innerHTML = description;
      descriptions.appendChild(li);
    }
    skill.appendChild(descriptions);

    list.appendChild(skill);
  }
  return list;
};

document.getElementById('skills').appendChild(make_skills());

const make_experiences = () => {
  const experiences = [
    {
      title: 'Shecodes Vietnam',
      time: '09/2019 - 07/2020',
      descriptions: [
        'Worked as a core member in technology to encourage more women getting involved in STEM',
        'Successfully ran a ~ 300 participants, 48 hours, all-women hackathon in Vietnam in Summer 2020'
      ]
    },
    {
      title: 'Extracurricular Activity',
      time: '',
      descriptions: [
        'Volunteer at the "11th conference of the decentralized French-Vietnamese cooperation"'
      ]
    }
  ];

  let list = document.createElement('ul');
  list.className = 'experience-list';
  for (let i = 0; i < experiences.length; i++) {
    let experience = document.createElement('li');

    let name = document.createElement('p');
    name.innerHTML = experiences[i].title;
    name.className = 'experience-title';
    let time = document.createElement('time');
    time.innerHTML = experiences[i].time;
    time.className = 'experience-time';
    let title = document.createElement('div');
    title.className = 'experience-name';
    title.appendChild(name);
    title.appendChild(time);
    experience.appendChild(title);

    let descriptions = document.createElement('ul');
    descriptions.className = 'experience-descriptions';
    for (let description of experiences[i].descriptions) {
      let li = document.createElement('li');
      li.innerHTML = description;
      descriptions.appendChild(li);
    }
    experience.appendChild(descriptions);

    list.appendChild(experience);
  }
  return list;
};

document.getElementById('experiences').appendChild(make_experiences());