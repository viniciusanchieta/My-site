import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Projetos já desenvolvidos',
    paragraph: 'Agora chegou a hora de ver os projetos que já desenvolvi com equipes e em carreira solo'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <a href="https://www.behance.net/gallery/84126885/Site-Parceria-Facil">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Ver mais
                  </div>
                  <h3 className="mt-0 mb-12">
                    Parceria Fácil - Site
                  </h3>
                  <p className="m-0">
                    A Parceria Fácil desenvolveu um projeto na comercialização de publicidade em sacos de pão, com foco no mercado nacional, adaptando um produto europeu á realidade e necessidade do anunciante Brasileiro.
                  </p>
                </div>
              </a>
              <a href="https://www.behance.net/gallery/80337139/Site-Invests-Securely" className="mt-12">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Ver mais
                  </div>
                  <h3 className="mt-0 mb-12">
                  Invests Securely - Site
                  </h3>
                  <p className="m-0">
                  Invests Securely fornece segurança e bons resultados, para novos investidores, onde eles possam ter nesse mercado uma consultoria em quem possa confiar.                  </p>
                </div>
              </a>
            </div>

            <div className="split-item">
              <a href="https://blog.buildlab.com.br/">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Ver mais
                  </div>
                  <h3 className="mt-0 mb-12">
                    Blog Build Lab
                  </h3>
                  <p className="m-0">
                    O blog da Build Lab foi desenvolvido para ser caminho da tecnologia até as pessoas interessadas neste mundo.
                  </p>
                </div>
              </a>
              <a href="https://www.behance.net/gallery/82439647/Template-Estudio">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Ver mais
                  </div>
                  <h3 className="mt-0 mb-12">
                  Estúdio - Template
                  </h3>
                  <p className="m-0">
                  Estúdio é um template de um site confiável e responsivo com base em Bootstrap. Perfeito para sites de agências, sites pessoais e até mesmo para outros sites de serviços relacionados.</p>
                </div>
              </a>
            </div>  

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;