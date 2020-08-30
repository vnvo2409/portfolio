const make_projects = () => {
  const projects = [
    {
      name: 'TensorFlow - Modular Filesystems C API',
      link: 'https://summerofcode.withgoogle.com/projects/#5496552598011904',
      descriptions: [
        'Student Developer at Google Summer of Code for TensorFlow',
        'Converted 3 filesystems: S3, GCS and Hadoop into C API using C and C++',
        'All filesystems were implemented as plugins and only the required ones are added at runtime which resulted in a smaller final binary of TensorFlow',
        'Replaced many dependencies from Tensorflow Core to make all 3 filesystems become more modular and avoid breaking ABI/API',
        'Rewrote completely the existing implementation of GCS using google-cloud-cpp for a cleaner implementation'
      ],
    },
    {
      name: 'Google Cloud Storage GRPC Emulator',
      link: 'https://github.com/googleapis/google-cloud-cpp/issues/4751',
      descriptions: [
        'Open-source contributor for google-cloud-cpp',
        'Implementing an emulator for testing purposes which supports both REST API and gRPC API using Flask/Python',
        'Providing an initial emulator support for HybridClient where some requests use gRPC and some use REST at the same time ( This is how GCS production is currently setup )',
      ],
    }
  ];

  let list = document.createElement('ul');
  list.className = 'project-list';
  for (let i = 0; i < projects.length; i++) {
    let project = document.createElement('li');

    let title = document.createElement('a');
    title.className = 'project-title';
    title.innerHTML = projects[i].name;
    title.href = projects[i].link;
    title.target = 'blank';
    project.appendChild(title);

    let descriptions = document.createElement('ul');
    descriptions.className = 'project-descriptions';
    for (let description of projects[i].descriptions) {
      let li = document.createElement('li');
      li.innerHTML = description;
      descriptions.appendChild(li);
    }
    project.appendChild(descriptions);

    list.appendChild(project);
  }
  return list;
};

document.getElementById('projects').appendChild(make_projects());

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