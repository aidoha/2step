import {
  Wrap,
  Collapse,
  Header,
  Name,
  Description,
  ProductAmount,
  CheckboxWrap,
  Content,
  ToggleText
} from './style';
import Checkbox from '../common/Checkbox';

const FilterCollapse = props => {
  return (
    <Wrap>
      {props.data.filterCounts &&
        JSON.parse(props.data.filterCounts).filters.map((val, indx) => {
          return (
            <Collapse key={indx}>
              <Header
                active={
                  JSON.parse(props.data.filterCounts).length === indx + 1 &&
                  props.isOpen !== indx
                }
              >
                <Name>{Object.keys(val)[0]}</Name>
              </Header>
              <Description>
                {val[Object.keys(val)[0]].map((v, i) => {
                  return (
                    <CheckboxWrap>
                      {v[Object.keys(v)[0]] === 0 ? null : (
                        <Checkbox
                          color="#77BEFF"
                          key={i}
                          id={Object.keys(val)[0]}
                          active={
                            props.filterItems.filter(i =>
                              i.value === JSON.parse(props.data.filterCounts).slug_keys[Object.keys(v)[0]]
                            ).length > 0 &&
                            props.filterItems.filter(i =>
                              i.name === JSON.parse(props.data.filterCounts).slug_keys[Object.keys(val)[0]]
                            ).length > 0
                          }
                          onChange={e =>
                            props.onFillFilter(
                              e,
                              JSON.parse(props.data.filterCounts).slug_keys[Object.keys(val)[0]],
                              JSON.parse(props.data.filterCounts).slug_keys[Object.keys(v)[0]]
                            )
                          }
                        >
                          {v[Object.keys(v)[0]] === 0
                            ? null
                            : Object.keys(v)[0]}
                        </Checkbox>
                      )}
                      <ProductAmount>
                        {v[Object.keys(v)[0]] !== 0
                          ? v[Object.keys(v)[0]]
                          : null}
                      </ProductAmount>
                    </CheckboxWrap>
                  );
                }).slice(0, 5)}
                
                {props.isOpen === -1 
                  && val[Object.keys(val)[0]].length > 5 
                  && <ToggleText onClick={() => props.onClick(indx)}>Показать всё</ToggleText>}
                  
                <Content isOpen={props.isOpen === indx}>
                  {val[Object.keys(val)[0]].map((v, i) => {
                    return (
                      <CheckboxWrap>
                        {v[Object.keys(v)[0]] === 0 ? null : (
                          <Checkbox
                            color="#4592FF"
                            key={i}
                            id={Object.keys(val)[0]}
                            active={
                              props.filterItems.filter(i =>
                                i.value.startsWith(Object.keys(v)[0])
                              ).length > 0 &&
                              props.filterItems.filter(i =>
                                i.name.startsWith(Object.keys(val)[0])
                              ).length > 0
                            }
                            onChange={e =>
                              props.onFillFilter(
                                e,
                                Object.keys(val)[0],
                                Object.keys(v)[0]
                              )
                            }
                          >
                            {v[Object.keys(v)[0]] === 0
                              ? null
                              : Object.keys(v)[0]}
                          </Checkbox>
                        )}
                        <ProductAmount>
                          {v[Object.keys(v)[0]] !== 0
                            ? v[Object.keys(v)[0]]
                            : null}
                        </ProductAmount>
                      </CheckboxWrap>
                    );
                  }).slice(5, val[Object.keys(val)[0]].length - 1)}
                </Content>
                {props.isOpen !== -1
                  && val[Object.keys(val)[0]].length > 5 
                  && <ToggleText onClick={() => props.onClick(indx)}>Скрыть</ToggleText>}
              </Description>
              
            </Collapse>
          );
        })}
    </Wrap>
  );
};

export default FilterCollapse;
