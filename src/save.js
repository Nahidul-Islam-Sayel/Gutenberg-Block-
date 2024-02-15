import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    return (
        <RichText.Content
            {...useBlockProps.save()}
            tagName="h4"
            value={attributes.text} // Assuming 'text' is the attribute you want to render
        />
    );
}
