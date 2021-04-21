# magento2-copyright

I created magento2 Theme for test task

For reviewing you have to go to root magento2 directory and add folder "Copyright" with all childs to folder: app/design/frontend.

Then from root directory start command: 
	
	bin/magento setup:upgrade

After that go to admin panel and choose my theme "Copyright Test" for global website in content -> configuration

Clear magento cache:
	
	 bin/magento c:c

Also please add CMS block, in magento2 admin Blocks with those properties:
Block Title: block-1,
Identifier: cms-block-1,
Store View: All Store Views,
Content: 

<table border="0">
<tbody>
<tr>
<td style="text-align: center;">title 1</td>
<td style="text-align: center;">title 2</td>
<td style="text-align: center;">title 3</td>
</tr>
<tr>
<td style="text-align: center;">content 1.1</td>
<td style="text-align: center;">content 2.1</td>
<td style="text-align: center;">content 3.1</td>
</tr>
<tr>
<td style="text-align: center;">content 1.1</td>
<td style="text-align: center;">content 2.2</td>
<td style="text-align: center;">content 3.2</td>
</tr>
</tbody>
</table>

Check view on Home page.
 
