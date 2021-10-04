import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container, 
  Breadcrumb, 
  RepoIcon, 
  Stats, 
  StarIcon, 
  ForkIcon, 
  LinkButton, 
  GithubIcon
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/LucasRodrigues106'}>
          LucasRodrigues106
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/LucasRodrigues106/github-clone'}>
          github-clone     
        </Link>
      </Breadcrumb>


      <p>Cntains all of my Youtube leassons code.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>

      </Stats>

      <LinkButton href={'https://github.com/LucasRodrigues106/github-clone'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;