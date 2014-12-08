var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * PostCategory Model
 * ==================
 */

var PostCategory = new keystone.List('PostCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
    label :'标签'
});

PostCategory.add({
	name: { type: String, required: true,label:'名称' }
});

PostCategory.relationship({ ref: 'Post', path: 'categories' });

PostCategory.register();
