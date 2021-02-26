import { Wrap, Heading, ItemsWrap, Item, ImageWrap, ProductName, Price } from './style';
import { Text } from '../../style/common';
import Link from 'next/link';

import toValidCost from '../../components/toValidCost';
import Rate from '../../components/common/Rating';

const productCard = ({ data, title }) => {
	return data.blockproductsSet.edges.length !== 0 && (
		<Wrap>
			<Heading>{title}</Heading>
			<ItemsWrap>
				{data.blockproductsSet.edges
					.map(item => {
						const { slug, oid, mediaUrl, name, minimalPrice } = item.node.product;
						return (
							<Link passHref href={`/product/${slug}/${oid}`}>
								<Item>
									<ImageWrap>
										<img src={JSON.parse(mediaUrl).images[0]} alt={name} title={name} />
									</ImageWrap>
									<ProductName>{name}</ProductName>
									<Rate data={item.node.product} />
									{minimalPrice !== null ? (
										<Price>{toValidCost(minimalPrice)} ₸</Price>
									) : (
										<Text marginTop="10px">Нет в наличии</Text>
									)}
								</Item>
							</Link>
						);
					})
					.slice(0, 15)}
			</ItemsWrap>
		</Wrap>
	);
};

export default productCard;
